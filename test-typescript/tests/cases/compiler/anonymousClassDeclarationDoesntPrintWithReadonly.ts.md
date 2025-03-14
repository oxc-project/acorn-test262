__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 58,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 58,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 21,
              "end": 56,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 32,
                "decorators": [],
                "name": "constructor",
                "optional": false
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 32,
                "end": 56,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 53,
                  "end": 56,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "TSParameterProperty",
                    "start": 33,
                    "end": 51,
                    "decorators": [],
                    "override": false,
                    "parameter": {
                      "type": "Identifier",
                      "start": 42,
                      "end": 51,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 43,
                        "end": 51,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 45,
                          "end": 51
                        }
                      }
                    },
                    "readonly": true,
                    "static": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "X",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 114,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 67,
        "end": 114,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 80,
          "end": 114,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 86,
              "end": 112,
              "argument": {
                "type": "ClassExpression",
                "start": 93,
                "end": 112,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 109,
                  "end": 112,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": null,
                "implements": [],
                "superClass": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "y",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
