__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 41,
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 41,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 39,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 39,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "global"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 55,
            "decorators": [],
            "name": "globals",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 58,
            "end": 69,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 67,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 63,
                  "end": 67,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 78,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 70,
        "end": 78,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 70,
          "end": 76,
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
