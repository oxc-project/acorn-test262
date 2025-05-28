__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 88,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 86,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 86,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 38,
                "decorators": [],
                "name": "Calculator",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 39,
                "end": 86,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 49,
                    "end": 80,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 66,
                      "decorators": [],
                      "name": "handelChar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 66,
                      "end": 80,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 69,
                        "end": 80,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 90,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 99,
        "end": 120,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 105,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
