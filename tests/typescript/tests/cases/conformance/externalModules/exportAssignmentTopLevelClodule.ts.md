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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 20,
              "end": 26
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 13,
            "end": 27
          }
        ],
        "start": 10,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "answer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 64
                  },
                  "init": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 67,
                    "end": 69
                  },
                  "definite": false,
                  "start": 58,
                  "end": 69
                }
              ],
              "declare": false,
              "start": 54,
              "end": 70
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 47,
            "end": 70
          }
        ],
        "start": 44,
        "end": 72
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 30,
      "end": 72
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 85
      },
      "start": 73,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 87
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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo_0",
          "raw": "\"./foo_0\"",
          "start": 21,
          "end": 30
        },
        "start": 13,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 36,
          "end": 46
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 51,
          "end": 53
        },
        "start": 36,
        "end": 53
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 72
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 65,
                  "end": 74
                },
                "definite": false,
                "start": 61,
                "end": 74
              }
            ],
            "declare": false,
            "start": 57,
            "end": 75
          }
        ],
        "start": 54,
        "end": 77
      },
      "alternate": null,
      "start": 33,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 77
}
```
