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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 26,
              "value": "test",
              "raw": "\"test\""
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 41,
        "end": 69,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 67,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 51,
              "end": 67,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 66,
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
                    "value": 42,
                    "raw": "42"
                  },
                  "definite": false
                }
              ],
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
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 30,
          "value": "./foo_0",
          "raw": "\"./foo_0\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "IfStatement",
      "start": 33,
      "end": 77,
      "test": {
        "type": "BinaryExpression",
        "start": 36,
        "end": 53,
        "left": {
          "type": "MemberExpression",
          "start": 36,
          "end": 46,
          "object": {
            "type": "Identifier",
            "start": 36,
            "end": 39,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 53,
          "value": 42,
          "raw": "42"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 54,
        "end": 77,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 57,
            "end": 75,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 74,
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
                  "callee": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 72,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
