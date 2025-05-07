__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 9,
  "end": 326,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 9,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 16,
        "end": 70,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 47,
          "end": 70,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 68,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 57,
                  "end": 67,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 60,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 63,
                    "end": 67,
                    "raw": "\"in\"",
                    "value": "in",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 29,
            "end": 45,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 45,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 155,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 87,
        "end": 155,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 132,
          "end": 155,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 153,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 152,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 148,
                    "end": 152,
                    "raw": "\"in\"",
                    "value": "in",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 100,
          "decorators": [],
          "name": "baz1",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 101,
            "end": 130,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ObjectExpression",
              "start": 108,
              "end": 130,
              "properties": [
                {
                  "type": "Property",
                  "start": 110,
                  "end": 128,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 111,
                    "end": 128,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 114,
                      "end": 128,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 116,
                          "end": 126,
                          "argument": {
                            "type": "Identifier",
                            "start": 123,
                            "end": 126,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
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
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 166,
      "end": 245,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 173,
        "end": 245,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 222,
          "end": 245,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 228,
              "end": 243,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 232,
                  "end": 242,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 235,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 238,
                    "end": 242,
                    "raw": "\"in\"",
                    "value": "in",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "decorators": [],
          "name": "baz2",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 187,
            "end": 220,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 220,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 206,
                "end": 220,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 208,
                    "end": 218,
                    "argument": {
                      "type": "Identifier",
                      "start": 215,
                      "end": 218,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 256,
      "end": 326,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 263,
        "end": 326,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 303,
          "end": 326,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 309,
              "end": 324,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 313,
                  "end": 323,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 316,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 319,
                    "end": 323,
                    "raw": "\"in\"",
                    "value": "in",
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 272,
          "end": 276,
          "decorators": [],
          "name": "baz3",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 277,
            "end": 301,
            "decorators": [],
            "left": {
              "type": "Identifier",
              "start": 277,
              "end": 281,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "right": {
              "type": "ClassExpression",
              "start": 284,
              "end": 301,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 290,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 292,
                    "end": 299,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": null,
                    "value": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 299,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
