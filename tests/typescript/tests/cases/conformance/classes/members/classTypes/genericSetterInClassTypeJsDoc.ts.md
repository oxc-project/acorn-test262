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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 33
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
              "name": "value",
              "start": 40,
              "end": 46
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 40,
            "end": 47
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 99
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "initialValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 112
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "value",
                          "start": 129,
                          "end": 135
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 135
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "initialValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 150
                      },
                      "start": 124,
                      "end": 150
                    },
                    "directive": null,
                    "start": 124,
                    "end": 151
                  }
                ],
                "start": 114,
                "end": 157
              },
              "expression": false,
              "start": 99,
              "end": 157
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 88,
            "end": 157
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 192,
              "end": 197
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 217,
                        "end": 221
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "value",
                        "start": 222,
                        "end": 228
                      },
                      "optional": false,
                      "computed": false,
                      "start": 217,
                      "end": 228
                    },
                    "start": 210,
                    "end": 229
                  }
                ],
                "start": 200,
                "end": 235
              },
              "expression": false,
              "start": 197,
              "end": 235
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 188,
            "end": 235
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 250
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 256
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 268,
                          "end": 272
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "value",
                          "start": 273,
                          "end": 279
                        },
                        "optional": false,
                        "computed": false,
                        "start": 268,
                        "end": 279
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 282,
                        "end": 287
                      },
                      "start": 268,
                      "end": 287
                    },
                    "directive": null,
                    "start": 268,
                    "end": 288
                  }
                ],
                "start": 258,
                "end": 294
              },
              "expression": false,
              "start": 250,
              "end": 294
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 241,
            "end": 294
          }
        ],
        "start": 34,
        "end": 296
      },
      "abstract": false,
      "declare": false,
      "start": 24,
      "end": 296
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 305
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 306,
                "end": 307
              }
            ],
            "start": 298,
            "end": 308
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 314
          },
          "optional": false,
          "computed": false,
          "start": 298,
          "end": 314
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 317,
          "end": 318
        },
        "start": 298,
        "end": 318
      },
      "directive": null,
      "start": 298,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 24,
  "end": 319
}
```
