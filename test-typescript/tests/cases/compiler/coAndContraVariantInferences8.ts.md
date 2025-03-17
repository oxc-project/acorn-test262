__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 210,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 112,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 111,
            "name": "fn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 111,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 75,
                "end": 111,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 76,
                    "end": 86,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 79,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 82,
                        "end": 86
                      }
                    }
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 91,
                    "end": 110,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 92,
                        "end": 101,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 93,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 95,
                            "end": 101
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 106,
                        "end": 110
                      }
                    }
                  }
                ]
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
      "start": 114,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 128,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 128,
            "end": 137,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 129,
              "end": 137,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 131,
                "end": 137
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
      "start": 139,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 159,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 159,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 156,
                "end": 159
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
      "type": "ExpressionStatement",
      "start": 162,
      "end": 179,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 178,
        "callee": {
          "type": "MemberExpression",
          "start": 162,
          "end": 169,
          "object": {
            "type": "Identifier",
            "start": 162,
            "end": 164,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 165,
            "end": 169,
            "name": "call",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 170,
            "end": 174,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 197,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 196,
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 187,
          "object": {
            "type": "Identifier",
            "start": 180,
            "end": 182,
            "name": "fn",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 183,
            "end": 187,
            "name": "call",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 188,
            "end": 192,
            "value": null,
            "raw": "null"
          },
          {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 199,
      "end": 209,
      "declaration": null,
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
