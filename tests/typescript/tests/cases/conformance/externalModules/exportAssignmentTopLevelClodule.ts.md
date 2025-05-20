__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 26,
              "raw": "\"test\"",
              "value": "test"
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 69,
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 69,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 67,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 51,
              "end": 67,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 66,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 61,
                    "decorators": [],
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 64,
                    "end": 66,
                    "raw": "42",
                    "value": 42
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 70,
      "end": 83,
      "expression": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
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
  "end": 77,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "raw": "\"./foo_0\"",
          "value": "./foo_0"
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 77,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 54,
        "end": 77,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 57,
            "end": 75,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 74,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 65,
                  "end": 74,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 72,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 53,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 46,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 53,
          "raw": "42",
          "value": 42
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
