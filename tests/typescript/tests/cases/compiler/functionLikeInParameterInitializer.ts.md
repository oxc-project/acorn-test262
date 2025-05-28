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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 16,
        "end": 70,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 45,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 47,
          "end": 70,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 53,
              "end": 68,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 57,
                  "end": 67,
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
                    "value": "in",
                    "raw": "\"in\""
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 155,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 87,
        "end": 155,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 100,
          "decorators": [],
          "name": "baz1",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
            "right": {
              "type": "ObjectExpression",
              "start": 108,
              "end": 130,
              "properties": [
                {
                  "type": "Property",
                  "start": 110,
                  "end": 128,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 111,
                    "end": 128,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 132,
          "end": 155,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 138,
              "end": 153,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 142,
                  "end": 152,
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
                    "value": "in",
                    "raw": "\"in\""
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 166,
      "end": 245,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 173,
        "end": 245,
        "id": {
          "type": "Identifier",
          "start": 182,
          "end": 186,
          "decorators": [],
          "name": "baz2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
            "right": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 220,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 222,
          "end": 245,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 228,
              "end": 243,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 232,
                  "end": 242,
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
                    "value": "in",
                    "raw": "\"in\""
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 256,
      "end": 326,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 263,
        "end": 326,
        "id": {
          "type": "Identifier",
          "start": 272,
          "end": 276,
          "decorators": [],
          "name": "baz3",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
            "right": {
              "type": "ClassExpression",
              "start": 284,
              "end": 301,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 290,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 292,
                    "end": 299,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 299,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 303,
          "end": 326,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 309,
              "end": 324,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 313,
                  "end": 323,
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
                    "value": "in",
                    "raw": "\"in\""
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
