__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 96,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 96,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 96,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 94,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "decorators": [],
                "name": "timeout",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 41,
                "end": 94,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 66,
                  "end": 94,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 76,
                      "end": 88,
                      "argument": {
                        "type": "Literal",
                        "start": 83,
                        "end": 87,
                        "raw": "null",
                        "value": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 55,
                    "decorators": [],
                    "name": "delay",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 56,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 58,
                    "end": 65,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 65,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
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
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
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
  "start": 63,
  "end": 155,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 63,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 75,
        "decorators": [],
        "name": "WinJS",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 78,
        "end": 125,
        "expression": {
          "type": "Literal",
          "start": 86,
          "end": 124,
          "raw": "'memberAccessMustUseModuleInstances_0'",
          "value": "memberAccessMustUseModuleInstances_0"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 154,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 128,
        "end": 153,
        "arguments": [
          {
            "type": "Literal",
            "start": 150,
            "end": 152,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 128,
          "end": 149,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 128,
            "end": 141,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 128,
              "end": 133,
              "decorators": [],
              "name": "WinJS",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 134,
              "end": 141,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 149,
            "decorators": [],
            "name": "timeout",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
