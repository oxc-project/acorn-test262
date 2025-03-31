__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 102,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 40,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 40,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 13,
                    "end": 23,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 14,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 14,
                      "end": 22,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 16,
                        "end": 22
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 28,
                    "end": 38,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 67,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 66,
        "callee": {
          "type": "MemberExpression",
          "start": 42,
          "end": 64,
          "object": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 44,
            "end": 64,
            "name": "getOwnPropertyNamess",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 68,
      "end": 102,
      "expression": {
        "type": "CallExpression",
        "start": 68,
        "end": 101,
        "callee": {
          "type": "MemberExpression",
          "start": 68,
          "end": 95,
          "object": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 75,
            "end": 95,
            "name": "getOwnPropertyNamess",
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
            "start": 96,
            "end": 100,
            "value": null,
            "raw": "null"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
