__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 56,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 28,
            "end": 34,
            "decorators": [],
            "name": "MyEnum",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 37,
            "end": 55,
            "properties": [
              {
                "type": "Property",
                "start": 41,
                "end": 45,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 44,
                  "end": 45,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 49,
                "end": 53,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 52,
                  "end": 53,
                  "value": 2,
                  "raw": "2"
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
      "type": "ExportDefaultDeclaration",
      "start": 57,
      "end": 79,
      "declaration": {
        "type": "Identifier",
        "start": 72,
        "end": 78,
        "decorators": [],
        "name": "MyEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
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
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "MyEnum",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 26,
        "value": "./def",
        "raw": "\"./def\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 70,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 61,
            "end": 69,
            "object": {
              "type": "Identifier",
              "start": 61,
              "end": 67,
              "decorators": [],
              "name": "MyEnum",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
