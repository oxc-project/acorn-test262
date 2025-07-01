__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "fix",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 26,
                      "end": 29
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 31,
                        "end": 38
                      },
                      "start": 29,
                      "end": 38
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 26,
                    "end": 38
                  }
                ],
                "start": 20,
                "end": 40
              },
              "start": 18,
              "end": 40
            },
            "start": 12,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "config",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 56
      },
      "start": 41,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "demo",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 46
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 57
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fix",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 61
              },
              "optional": false,
              "computed": false,
              "start": 56,
              "end": 61
            },
            "directive": null,
            "start": 56,
            "end": 61
          }
        ],
        "start": 50,
        "end": 63
      },
      "expression": false,
      "start": 33,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 63
}
```
