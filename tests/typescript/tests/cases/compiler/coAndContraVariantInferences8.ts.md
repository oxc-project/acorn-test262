__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "fn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      },
                      "start": 79,
                      "end": 86
                    },
                    "start": 76,
                    "end": 86
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 95,
                            "end": 101
                          },
                          "start": 93,
                          "end": 101
                        },
                        "start": 92,
                        "end": 101
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 106,
                        "end": 110
                      },
                      "start": 103,
                      "end": 110
                    },
                    "start": 91,
                    "end": 110
                  }
                ],
                "start": 75,
                "end": 111
              },
              "start": 73,
              "end": 111
            },
            "start": 71,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 71,
          "end": 111
        }
      ],
      "declare": true,
      "start": 57,
      "end": 112
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
              },
              "start": 129,
              "end": 137
            },
            "start": 128,
            "end": 137
          },
          "init": null,
          "definite": false,
          "start": 128,
          "end": 137
        }
      ],
      "declare": true,
      "start": 114,
      "end": 138
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 156,
                "end": 159
              },
              "start": 154,
              "end": 159
            },
            "start": 153,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 153,
          "end": 159
        }
      ],
      "declare": true,
      "start": 139,
      "end": 160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 164
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 169
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 169
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 170,
            "end": 174
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          }
        ],
        "optional": false,
        "start": 162,
        "end": 178
      },
      "directive": null,
      "start": 162,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 182
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "call",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 187
          },
          "optional": false,
          "computed": false,
          "start": 180,
          "end": 187
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 188,
            "end": 192
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          }
        ],
        "optional": false,
        "start": 180,
        "end": 196
      },
      "directive": null,
      "start": 180,
      "end": 197
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 199,
      "end": 209
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 209
}
```
