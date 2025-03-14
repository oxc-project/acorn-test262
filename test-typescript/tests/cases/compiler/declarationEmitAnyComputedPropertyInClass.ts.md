__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 44,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 17,
      "end": 43,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 32,
        "end": 42,
        "raw": "\"abcdefgh\"",
        "value": "abcdefgh"
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
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 27,
        "raw": "\"abcdefgh\"",
        "value": "abcdefgh"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "Test",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 73,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 73,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 51,
              "end": 70,
              "computed": true,
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "start": 52,
                "end": 64,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 56,
                  "decorators": [],
                  "name": "Test",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 64,
                  "decorators": [],
                  "name": "someKey",
                  "optional": false
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 65,
                "end": 70,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 68,
                  "end": 70,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
