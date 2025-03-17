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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 20,
              "end": 26,
              "value": "test",
              "raw": "\"test\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 55,
                  "end": 66,
                  "id": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 61,
                    "name": "answer",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
  "end": 78,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 46,
            "name": "answer",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 61,
                "end": 74,
                "id": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 65,
                  "end": 74,
                  "callee": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 72,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
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
