__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 9
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    },
                    "start": 34,
                    "end": 39
                  },
                  "start": 33,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 33,
                "end": 39
              }
            ],
            "declare": false,
            "start": 27,
            "end": 39
          }
        ],
        "start": 25,
        "end": 41
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 10,
      "end": 41
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
            "name": "globals",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 55
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 63,
                  "end": 67
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 67
              }
            ],
            "start": 58,
            "end": 69
          },
          "definite": false,
          "start": 48,
          "end": 69
        }
      ],
      "declare": false,
      "start": 42,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": null,
          "start": 70,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 78
        },
        "optional": false,
        "computed": false,
        "start": 70,
        "end": 78
      },
      "directive": null,
      "start": 70,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 117
}
```
