__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 10,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 24,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 41,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 39,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 39,
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
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 69,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 69,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 63,
                  "end": 67,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
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
      "type": "ExpressionStatement",
      "start": 70,
      "end": 78,
      "expression": {
        "type": "MemberExpression",
        "start": 70,
        "end": 78,
        "object": {
          "type": "Identifier",
          "start": 70,
          "end": 76,
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
