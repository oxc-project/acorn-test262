__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 20
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "timeout",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 41
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "delay",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      },
                      "start": 47,
                      "end": 55
                    },
                    "start": 42,
                    "end": 55
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 65
                    },
                    "typeArguments": null,
                    "start": 58,
                    "end": 65
                  },
                  "start": 56,
                  "end": 65
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 83,
                        "end": 87
                      },
                      "start": 76,
                      "end": 88
                    }
                  ],
                  "start": 66,
                  "end": 94
                },
                "expression": false,
                "start": 41,
                "end": 94
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 27,
              "end": 94
            }
          ],
          "start": 21,
          "end": 96
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 96
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 97
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WinJS",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 66
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./staticInstanceResolution3_0",
          "raw": "'./staticInstanceResolution3_0'",
          "start": 77,
          "end": 108
        },
        "start": 69,
        "end": 109
      },
      "importKind": "value",
      "start": 54,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "WinJS",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 116
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 124
            },
            "optional": false,
            "computed": false,
            "start": 111,
            "end": 124
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "timeout",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 111,
          "end": 132
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 133,
            "end": 135
          }
        ],
        "optional": false,
        "start": 111,
        "end": 136
      },
      "directive": null,
      "start": 111,
      "end": 137
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 54,
  "end": 137
}
```
