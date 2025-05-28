__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "id",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 14,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 8,
                "end": 14
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 17,
            "end": 22,
            "value": 10000,
            "raw": "10000"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 53,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 52,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 40,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 43,
            "end": 52,
            "value": "my name",
            "raw": "\"my name\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 81,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 65,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 68,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 70,
                "end": 74,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 74,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 76,
                "end": 78,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 78,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 78,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 95,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 96,
          "end": 124,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 97,
            "end": 124,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 99,
              "end": 124,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 101,
                  "end": 111,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 102,
                    "end": 110,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 104,
                      "end": 110
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 112,
                  "end": 122,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 114,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 114,
                    "end": 122,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 116,
                      "end": 122
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 129,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 142,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 141,
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 133,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 134,
            "end": 140,
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
