__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 28
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 33
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 45
              },
              "id": null,
              "generator": false,
              "start": 36,
              "end": 45
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 45
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 60
                  },
                  "init": {
                    "type": "Literal",
                    "value": "in",
                    "raw": "\"in\"",
                    "start": 63,
                    "end": 67
                  },
                  "definite": false,
                  "start": 57,
                  "end": 67
                }
              ],
              "declare": false,
              "start": 53,
              "end": 68
            }
          ],
          "start": 47,
          "end": 70
        },
        "expression": false,
        "start": 16,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz1",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 100
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 123,
                            "end": 126
                          },
                          "start": 116,
                          "end": 126
                        }
                      ],
                      "start": 114,
                      "end": 128
                    },
                    "expression": false,
                    "start": 111,
                    "end": 128
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 110,
                  "end": 128
                }
              ],
              "start": 108,
              "end": 130
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 130
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 145
                  },
                  "init": {
                    "type": "Literal",
                    "value": "in",
                    "raw": "\"in\"",
                    "start": 148,
                    "end": 152
                  },
                  "definite": false,
                  "start": 142,
                  "end": 152
                }
              ],
              "declare": false,
              "start": 138,
              "end": 153
            }
          ],
          "start": 132,
          "end": 155
        },
        "expression": false,
        "start": 87,
        "end": 155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 155
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz2",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 186
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 191
            },
            "right": {
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 218
                    },
                    "start": 208,
                    "end": 218
                  }
                ],
                "start": 206,
                "end": 220
              },
              "expression": false,
              "start": 194,
              "end": 220
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 220
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 235
                  },
                  "init": {
                    "type": "Literal",
                    "value": "in",
                    "raw": "\"in\"",
                    "start": 238,
                    "end": 242
                  },
                  "definite": false,
                  "start": 232,
                  "end": 242
                }
              ],
              "declare": false,
              "start": 228,
              "end": 243
            }
          ],
          "start": 222,
          "end": 245
        },
        "expression": false,
        "start": 173,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 166,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "baz3",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 276
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 281
            },
            "right": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 296,
                      "end": 299
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 292,
                    "end": 299
                  }
                ],
                "start": 290,
                "end": 301
              },
              "abstract": false,
              "declare": false,
              "start": 284,
              "end": 301
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 301
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 316
                  },
                  "init": {
                    "type": "Literal",
                    "value": "in",
                    "raw": "\"in\"",
                    "start": 319,
                    "end": 323
                  },
                  "definite": false,
                  "start": 313,
                  "end": 323
                }
              ],
              "declare": false,
              "start": 309,
              "end": 324
            }
          ],
          "start": 303,
          "end": 326
        },
        "expression": false,
        "start": 263,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 256,
      "end": 326
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 9,
  "end": 326
}
```
