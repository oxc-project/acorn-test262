__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 66
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "privateProp",
              "start": 71,
              "end": 83
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 85,
                    "end": 91
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 94,
                    "end": 103
                  }
                ],
                "start": 85,
                "end": 103
              },
              "start": 83,
              "end": 103
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 71,
            "end": 104
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "problem",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "??=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "privateProp",
                          "start": 129,
                          "end": 141
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 141
                      },
                      "right": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 146,
                          "end": 151
                        },
                        "consequent": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "neverThis",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 154,
                            "end": 163
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 154,
                          "end": 165
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": 20,
                          "raw": "20",
                          "start": 168,
                          "end": 170
                        },
                        "start": 146,
                        "end": 170
                      },
                      "start": 124,
                      "end": 170
                    },
                    "directive": null,
                    "start": 124,
                    "end": 171
                  }
                ],
                "start": 118,
                "end": 175
              },
              "expression": false,
              "start": 115,
              "end": 175
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 175
          }
        ],
        "start": 67,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "neverThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 197
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 201,
          "end": 206
        },
        "start": 199,
        "end": 206
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "This should really really never happen!",
                  "raw": "\"This should really really never happen!\"",
                  "start": 227,
                  "end": 268
                }
              ],
              "start": 217,
              "end": 269
            },
            "start": 211,
            "end": 270
          }
        ],
        "start": 207,
        "end": 272
      },
      "expression": false,
      "start": 179,
      "end": 272
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 272
}
```
