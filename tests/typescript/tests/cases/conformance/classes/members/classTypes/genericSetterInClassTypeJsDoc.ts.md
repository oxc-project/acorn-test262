__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 319,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 296,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 296,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 47,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 40,
              "end": 46,
              "name": "value"
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 88,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 99,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 99,
              "end": 157,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 112,
                  "decorators": [],
                  "name": "initialValue",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 157,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 151,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 124,
                      "end": 150,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 135,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 129,
                          "end": 135,
                          "name": "value"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 150,
                        "decorators": [],
                        "name": "initialValue",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 235,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 197,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 235,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 200,
                "end": 235,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 210,
                    "end": 229,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 217,
                      "end": 228,
                      "object": {
                        "type": "ThisExpression",
                        "start": 217,
                        "end": 221
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 222,
                        "end": 228,
                        "name": "value"
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 241,
            "end": 294,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 250,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 294,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 251,
                  "end": 256,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 258,
                "end": 294,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 268,
                    "end": 288,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 268,
                      "end": 287,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 268,
                        "end": 279,
                        "object": {
                          "type": "ThisExpression",
                          "start": 268,
                          "end": 272
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 273,
                          "end": 279,
                          "name": "value"
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 282,
                        "end": 287,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 298,
      "end": 319,
      "expression": {
        "type": "AssignmentExpression",
        "start": 298,
        "end": 318,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 298,
          "end": 314,
          "object": {
            "type": "NewExpression",
            "start": 298,
            "end": 308,
            "callee": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 309,
            "end": 314,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 317,
          "end": 318,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
