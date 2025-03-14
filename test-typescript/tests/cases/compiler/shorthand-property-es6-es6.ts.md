test.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 25,
        "raw": "'./foo'",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 11,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 36,
            "decorators": [],
            "name": "baz",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 43,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "bar",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 55,
            "end": 67,
            "properties": [
              {
                "type": "Property",
                "start": 57,
                "end": 60,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 60,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 62,
                "end": 65,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "decorators": [],
                  "name": "baz",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
