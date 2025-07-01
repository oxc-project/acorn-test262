__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "mappedObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 43
                },
                "constraint": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 47,
                    "end": 52
                  },
                  "start": 47,
                  "end": 52
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 55,
                      "end": 59
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 64
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 66,
                              "end": 72
                            },
                            "start": 64,
                            "end": 72
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 63,
                          "end": 72
                        }
                      ],
                      "start": 62,
                      "end": 73
                    }
                  ],
                  "start": 55,
                  "end": 73
                },
                "optional": false,
                "readonly": null,
                "start": 40,
                "end": 74
              },
              "start": 38,
              "end": 74
            },
            "start": 26,
            "end": 74
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 81
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 84,
                        "end": 85
                      },
                      "value": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 87,
                        "end": 94
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 84,
                      "end": 94
                    }
                  ],
                  "start": 83,
                  "end": 95
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 78,
                "end": 95
              }
            ],
            "start": 77,
            "end": 96
          },
          "definite": false,
          "start": 26,
          "end": 96
        }
      ],
      "declare": false,
      "start": 22,
      "end": 97
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 119,
            "end": 120
          }
        ],
        "start": 118,
        "end": 121
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "typeArguments": null,
              "start": 125,
              "end": 126
            },
            "start": 123,
            "end": 126
          },
          "start": 122,
          "end": 126
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNullKeyword",
              "start": 129,
              "end": 133
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 137
              },
              "typeArguments": null,
              "start": 136,
              "end": 137
            }
          ],
          "start": 129,
          "end": 137
        },
        "start": 127,
        "end": 137
      },
      "body": null,
      "expression": false,
      "start": 98,
      "end": 138
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 152
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 163,
                "end": 168
              },
              "start": 163,
              "end": 168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 168
          }
        ],
        "start": 152,
        "end": 169
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "typeArguments": null,
              "start": 175,
              "end": 176
            },
            "start": 173,
            "end": 176
          },
          "start": 170,
          "end": 176
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "element",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 195
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 201
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "mappedObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 202,
                        "end": 214
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 218
                      },
                      "optional": false,
                      "computed": true,
                      "start": 202,
                      "end": 219
                    }
                  ],
                  "optional": false,
                  "start": 198,
                  "end": 220
                },
                "definite": false,
                "start": 188,
                "end": 220
              }
            ],
            "declare": false,
            "start": 182,
            "end": 221
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 235
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 239,
                "end": 243
              },
              "start": 228,
              "end": 243
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 249,
              "end": 256
            },
            "alternate": null,
            "start": 224,
            "end": 256
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 266
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 269,
                    "end": 276
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 278
                  },
                  "optional": false,
                  "computed": false,
                  "start": 269,
                  "end": 278
                },
                "definite": false,
                "start": 265,
                "end": 278
              }
            ],
            "declare": false,
            "start": 259,
            "end": 279
          }
        ],
        "start": 178,
        "end": 281
      },
      "expression": false,
      "start": 140,
      "end": 281
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 281
}
```
