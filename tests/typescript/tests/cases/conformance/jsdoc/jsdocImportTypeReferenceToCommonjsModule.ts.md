__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 40,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 40,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 26,
                    "end": 38,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 29,
                      "decorators": [],
                      "name": "fix",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 38,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 31,
                        "end": 38
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSExportAssignment",
      "start": 41,
      "end": 57,
      "expression": {
        "type": "Identifier",
        "start": 50,
        "end": 56,
        "decorators": [],
        "name": "config",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 63,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 46,
        "decorators": [],
        "name": "demo",
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
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 63,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 56,
            "end": 61,
            "expression": {
              "type": "MemberExpression",
              "start": 56,
              "end": 61,
              "object": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 58,
                "end": 61,
                "decorators": [],
                "name": "fix",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
