__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 46,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 46,
            "name": "MyClassDecorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 46,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 46,
                  "name": "ClassDecorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 96,
            "name": "MyMethodDecorator",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 96,
                  "name": "MethodDecorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 202,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 154,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 142,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 142,
              "end": 154,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 143,
                  "end": 150,
                  "argument": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 150,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 154,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 159,
            "end": 200,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 188,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 188,
              "end": 200,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 189,
                  "end": 196,
                  "argument": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 196,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 200,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 159,
                "end": 177,
                "expression": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 177,
                  "name": "MyMethodDecorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 99,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 100,
            "end": 116,
            "name": "MyClassDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 204,
      "end": 339,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 229,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 230,
        "end": 339,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 236,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 247,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 247,
              "end": 269,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 248,
                  "end": 265,
                  "argument": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 255,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 257,
                      "end": 265,
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 257,
                        "end": 263
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 267,
                "end": 269,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 274,
            "end": 337,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 303,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 303,
              "end": 337,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 304,
                  "end": 314,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 308,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 310,
                      "end": 314
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 316,
                  "end": 333,
                  "argument": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 323,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 333,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 325,
                      "end": 333,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 325,
                        "end": 331
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 335,
                "end": 337,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 274,
                "end": 292,
                "expression": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 292,
                  "name": "MyMethodDecorator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [
        {
          "type": "Decorator",
          "start": 204,
          "end": 221,
          "expression": {
            "type": "Identifier",
            "start": 205,
            "end": 221,
            "name": "MyClassDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
