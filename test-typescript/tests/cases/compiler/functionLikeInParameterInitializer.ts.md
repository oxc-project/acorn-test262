__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 9,
  "end": 327,
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
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 29,
            "end": 45,
            "left": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 36,
              "end": 45,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                  "id": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 60,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "baz1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 101,
            "end": 130,
            "left": {
              "type": "Identifier",
              "start": 101,
              "end": 105,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "name": "f",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 111,
                    "end": 128,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
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
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                  "id": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 145,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "baz2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 187,
            "end": 220,
            "left": {
              "type": "Identifier",
              "start": 187,
              "end": 191,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "FunctionExpression",
              "start": 194,
              "end": 220,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                  "id": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 235,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "name": "baz3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "AssignmentPattern",
            "start": 277,
            "end": 301,
            "left": {
              "type": "Identifier",
              "start": 277,
              "end": 281,
              "name": "func",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "ClassExpression",
              "start": 284,
              "end": 301,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 290,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 292,
                    "end": 299,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 292,
                      "end": 293,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 299,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": null,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          }
        ],
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
                  "id": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 316,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "let",
              "declare": false
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
