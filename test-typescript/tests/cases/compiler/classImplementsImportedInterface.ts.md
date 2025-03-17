__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 59,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 57,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 23,
              "end": 57,
              "id": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 35,
                "end": 57,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 45,
                    "end": 51,
                    "key": {
                      "type": "Identifier",
                      "start": 45,
                      "end": 48,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 61,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 70,
        "name": "M2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 88,
              "end": 92,
              "left": {
                "type": "Identifier",
                "start": 88,
                "end": 90,
                "name": "M1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ClassDeclaration",
            "start": 98,
            "end": 143,
            "id": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 119,
              "end": 143,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 129,
                  "end": 137,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 132,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 132,
                    "end": 137,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 135,
                      "end": 137,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 117,
                "end": 118,
                "expression": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 118,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
