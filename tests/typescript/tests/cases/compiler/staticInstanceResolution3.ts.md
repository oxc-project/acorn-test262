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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 96,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 96,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 27,
              "end": 94,
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
              "value": {
                "type": "FunctionExpression",
                "start": 41,
                "end": 94,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 58,
                      "end": 65,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
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
                        "value": null,
                        "raw": "null"
                      }
                    }
                  ]
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 69,
        "end": 109,
        "expression": {
          "type": "Literal",
          "start": 77,
          "end": 108,
          "value": "./staticInstanceResolution3_0",
          "raw": "'./staticInstanceResolution3_0'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 111,
        "end": 136,
        "callee": {
          "type": "MemberExpression",
          "start": 111,
          "end": 132,
          "object": {
            "type": "MemberExpression",
            "start": 111,
            "end": 124,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "WinJS",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 117,
              "end": 124,
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 125,
            "end": 132,
            "decorators": [],
            "name": "timeout",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 133,
            "end": 135,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
