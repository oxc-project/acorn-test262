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
          "name": "noReturn",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 24
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 27,
          "end": 29
        },
        "expression": false,
        "start": 7,
        "end": 29
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParamAnnotation",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 64
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 66
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 69,
            "end": 73
          },
          "start": 67,
          "end": 73
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 74,
          "end": 76
        },
        "expression": false,
        "start": 38,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 76
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParamAnnotationDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 118
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 123,
              "end": 124
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 124
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 127,
            "end": 131
          },
          "start": 125,
          "end": 131
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 132,
          "end": 134
        },
        "expression": false,
        "start": 85,
        "end": 134
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 78,
      "end": 134
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParamAnnotationBadDefault",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 179
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 184,
                "end": 185
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 188,
                "end": 189
              },
              "start": 184,
              "end": 189
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 189
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 193
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 201,
                      "end": 202
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 205,
                      "end": 206
                    },
                    "start": 201,
                    "end": 206
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 198,
                  "end": 206
                }
              ],
              "start": 196,
              "end": 208
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 191,
            "end": 208
          },
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 212
            },
            "right": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 216,
                      "end": 217
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 220,
                      "end": 221
                    },
                    "start": 216,
                    "end": 221
                  }
                ],
                "start": 215,
                "end": 222
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 226,
                  "end": 231
                },
                "typeArguments": null,
                "start": 226,
                "end": 231
              },
              "start": 215,
              "end": 231
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 231
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 234,
            "end": 238
          },
          "start": 232,
          "end": 238
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 239,
          "end": 241
        },
        "expression": false,
        "start": 143,
        "end": 241
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 136,
      "end": 241
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "noParamAnnotationBadDefault2",
          "optional": false,
          "typeAnnotation": null,
          "start": 259,
          "end": 287
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 297,
                      "end": 298
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 301,
                      "end": 302
                    },
                    "start": 297,
                    "end": 302
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 294,
                  "end": 302
                }
              ],
              "start": 292,
              "end": 304
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 304
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 307,
            "end": 311
          },
          "start": 305,
          "end": 311
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 312,
          "end": 314
        },
        "expression": false,
        "start": 250,
        "end": 314
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 243,
      "end": 314
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 314
}
```
