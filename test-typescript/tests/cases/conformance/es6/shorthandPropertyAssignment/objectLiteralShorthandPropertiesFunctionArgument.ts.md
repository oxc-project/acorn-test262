__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 28,
            "name": "id",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 36,
            "value": 10000,
            "raw": "10000"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 54,
            "name": "name",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 57,
            "end": 66,
            "value": "my name",
            "raw": "\"my name\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 79,
            "name": "person",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 82,
            "end": 94,
            "properties": [
              {
                "type": "Property",
                "start": 84,
                "end": 88,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 88,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 88,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 90,
                "end": 92,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 92,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 97,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 109,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 141,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 113,
              "end": 141,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 115,
                  "end": 128,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 119,
                    "name": "name",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 119,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 121,
                      "end": 127
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 129,
                  "end": 139,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 131,
                    "end": 139,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 143,
        "end": 146,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 159,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 158,
        "callee": {
          "type": "Identifier",
          "start": 147,
          "end": 150,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 151,
            "end": 157,
            "name": "person",
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
      "type": "VariableDeclaration",
      "start": 162,
      "end": 195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 194,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 172,
            "end": 194,
            "properties": [
              {
                "type": "Property",
                "start": 174,
                "end": 184,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 178,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 184,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 186,
                "end": 192,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 188,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 190,
                  "end": 192,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
