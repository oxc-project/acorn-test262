__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 477,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 180,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 180,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 106,
            "end": 158,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 114,
                "end": 158,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 124,
                    "end": 152,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 131,
                      "end": 152,
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "start": 131,
                        "end": 139,
                        "argument": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "typeof",
                        "prefix": true
                      },
                      "right": {
                        "type": "Literal",
                        "start": 144,
                        "end": 152,
                        "raw": "'string'",
                        "value": "string",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 163,
            "end": 178,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 167,
              "end": 178,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 170,
                "end": 178,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 182,
      "end": 422,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 200,
        "end": 422,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 314,
            "end": 357,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 314,
              "end": 317,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 318,
              "end": 357,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 322,
                "end": 357,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 332,
                    "end": 351,
                    "argument": {
                      "type": "CallExpression",
                      "start": 339,
                      "end": 351,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 349,
                          "end": 350,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 339,
                        "end": 348,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 339,
                          "end": 344
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 348,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 319,
                  "end": 320,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 363,
            "end": 378,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 363,
              "end": 366,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 367,
              "end": 378,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 370,
                "end": 378,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 405,
            "end": 420,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 405,
              "end": 408,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 409,
              "end": 420,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 412,
                "end": 420,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 425,
      "end": 477,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 433,
        "end": 477,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 475,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 460,
              "end": 463,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 464,
              "end": 475,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 467,
                "end": 475,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 432,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
