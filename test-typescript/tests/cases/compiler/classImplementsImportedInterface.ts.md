classImplementsImportedInterface.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 59,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 57,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 57,
              "body": {
                "type": "TSInterfaceBody",
                "start": 35,
                "end": 57,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 45,
                    "end": 51,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 48,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "M1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 61,
      "end": 145,
      "body": {
        "type": "TSModuleBlock",
        "start": 71,
        "end": 145,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 77,
            "end": 93,
            "id": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 88,
              "end": 92,
              "left": {
                "type": "Identifier",
                "start": 88,
                "end": 90,
                "decorators": [],
                "name": "M1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 143,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 119,
              "end": 143,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 129,
                  "end": 137,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 132,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 132,
                    "end": 137,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 135,
                      "end": 137,
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
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 117,
                "end": 118,
                "expression": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "decorators": [],
        "name": "M2",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
