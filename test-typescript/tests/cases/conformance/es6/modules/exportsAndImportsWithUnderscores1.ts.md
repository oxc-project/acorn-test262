__ESTREE_TEST__:FAIL:
```json
',' expected.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 20,
        "raw": "\"./m1\"",
        "value": "./m1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 28,
          "end": 46,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 28,
            "end": 42,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 30,
                "end": 32,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 32,
                  "decorators": [],
                  "name": "__",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 32,
                  "decorators": [],
                  "name": "__",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 34,
                "end": 35,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 37,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "___",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "___",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "R",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
