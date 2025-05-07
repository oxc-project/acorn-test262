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
                        "value": null,
                        "regex": null,
                        "bigint": null
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
  "start": 54,
  "end": 137,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 54,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 66,
        "decorators": [],
        "name": "WinJS",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 69,
        "end": 109,
        "expression": {
          "type": "Literal",
          "start": 77,
          "end": 108,
          "raw": "'./staticInstanceResolution3_0'",
          "value": "./staticInstanceResolution3_0",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 137,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 136,
        "arguments": [
          {
            "type": "Literal",
            "start": 133,
            "end": 135,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 111,
          "end": 132,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 111,
            "end": 124,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "WinJS",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 124,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 132,
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
