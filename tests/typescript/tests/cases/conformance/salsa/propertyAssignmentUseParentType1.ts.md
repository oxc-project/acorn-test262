__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 22,
                "end": 29
              },
              "start": 20,
              "end": 29
            },
            "start": 18,
            "end": 29
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 123,
                  "raw": "123",
                  "start": 39,
                  "end": 42
                },
                "start": 39,
                "end": 42
              },
              "start": 37,
              "end": 42
            },
            "accessibility": null,
            "static": false,
            "start": 34,
            "end": 43
          }
        ],
        "start": 12,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaced",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "typeArguments": null,
                  "start": 71,
                  "end": 72
                },
                "start": 69,
                "end": 72
              },
              "start": 59,
              "end": 72
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 81,
                "end": 85
              },
              "id": null,
              "generator": false,
              "start": 75,
              "end": 85
            },
            "definite": false,
            "start": 59,
            "end": 85
          }
        ],
        "declare": false,
        "start": 53,
        "end": 86
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "interfaced",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 97
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 101
          },
          "optional": false,
          "computed": false,
          "start": 87,
          "end": 101
        },
        "right": {
          "type": "Literal",
          "value": 123,
          "raw": "123",
          "start": 104,
          "end": 107
        },
        "start": 87,
        "end": 107
      },
      "directive": null,
      "start": 87,
      "end": 108
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inlined",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 138,
                          "end": 145
                        },
                        "start": 136,
                        "end": 145
                      },
                      "start": 134,
                      "end": 146
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nun",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 150
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 456,
                            "raw": "456",
                            "start": 152,
                            "end": 155
                          },
                          "start": 152,
                          "end": 155
                        },
                        "start": 150,
                        "end": 155
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 147,
                      "end": 155
                    }
                  ],
                  "start": 132,
                  "end": 157
                },
                "start": 130,
                "end": 157
              },
              "start": 123,
              "end": 157
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 166,
                "end": 170
              },
              "id": null,
              "generator": false,
              "start": 160,
              "end": 170
            },
            "definite": false,
            "start": 123,
            "end": 170
          }
        ],
        "declare": false,
        "start": 117,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 110,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "inlined",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 179
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "nun",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 183
          },
          "optional": false,
          "computed": false,
          "start": 172,
          "end": 183
        },
        "right": {
          "type": "Literal",
          "value": 456,
          "raw": "456",
          "start": 186,
          "end": 189
        },
        "start": 172,
        "end": 189
      },
      "directive": null,
      "start": 172,
      "end": 190
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ignoreJsdoc",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 216
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 225,
                "end": 229
              },
              "id": null,
              "generator": false,
              "start": 219,
              "end": 229
            },
            "definite": false,
            "start": 205,
            "end": 229
          }
        ],
        "declare": false,
        "start": 199,
        "end": 230
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 192,
      "end": 230
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ignoreJsdoc",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 291
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "extra",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 297
          },
          "optional": false,
          "computed": false,
          "start": 280,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": 111,
          "raw": "111",
          "start": 300,
          "end": 303
        },
        "start": 280,
        "end": 303
      },
      "directive": null,
      "start": 280,
      "end": 303
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 303
}
```
