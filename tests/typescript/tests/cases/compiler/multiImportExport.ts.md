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
        "name": "Drawing",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 14
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./Drawing",
          "raw": "'./Drawing'",
          "start": 25,
          "end": 36
        },
        "start": 17,
        "end": 37
      },
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "addr",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 47
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Drawing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 61
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "optional": false,
                "computed": false,
                "start": 54,
                "end": 66
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Adder",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 72
              },
              "optional": false,
              "computed": false,
              "start": 54,
              "end": 72
            },
            "typeArguments": null,
            "arguments": [],
            "start": 50,
            "end": 74
          },
          "definite": false,
          "start": 43,
          "end": 74
        }
      ],
      "declare": false,
      "start": 39,
      "end": 75
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Math",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 18
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "./Math/Math",
            "raw": "'./Math/Math'",
            "start": 29,
            "end": 42
          },
          "start": 21,
          "end": 43
        },
        "importKind": "value",
        "start": 7,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
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
        "name": "Adder",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./Adder",
          "raw": "'./Adder'",
          "start": 23,
          "end": 32
        },
        "start": 15,
        "end": 33
      },
      "importKind": "value",
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 44
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Adder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 58
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Adder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 64
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 53,
                "end": 64
              }
            ],
            "start": 47,
            "end": 66
          },
          "definite": false,
          "start": 40,
          "end": 66
        }
      ],
      "declare": false,
      "start": 36,
      "end": 67
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Math",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 82
      },
      "start": 69,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Adder",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 21
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
                    },
                    "start": 23,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "start": 34,
                    "end": 42
                  },
                  "start": 33,
                  "end": 42
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 44,
                "end": 60
              },
              "expression": false,
              "start": 21,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 60
          }
        ],
        "start": 12,
        "end": 62
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 62
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Adder",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 78
      },
      "start": 64,
      "end": 79
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 79
}
```
