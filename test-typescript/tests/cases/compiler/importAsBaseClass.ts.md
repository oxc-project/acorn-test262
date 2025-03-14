__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 54,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 54,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 26,
              "end": 52,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 26,
                "end": 31,
                "decorators": [],
                "name": "greet",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 31,
                "end": 52,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 34,
                  "end": 52,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 36,
                      "end": 50,
                      "argument": {
                        "type": "Literal",
                        "start": 43,
                        "end": 50,
                        "raw": "'greet'",
                        "value": "greet"
                      }
                    }
                  ]
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
          "start": 13,
          "end": 20,
          "decorators": [],
          "name": "Greeter",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "Greeter",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 48,
          "raw": "\"./importAsBaseClass_0\"",
          "value": "./importAsBaseClass_0"
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 79,
        "end": 82,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "decorators": [],
        "name": "Hello",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "decorators": [],
        "name": "Greeter",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
