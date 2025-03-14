__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 137,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 35,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 33,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 33,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 33,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 36,
      "end": 87,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 87,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 51,
            "end": 69,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 58,
              "end": 69,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 66,
                "end": 69,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ClassDeclaration",
            "start": 74,
            "end": 85,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 82,
              "end": 85,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "D",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 97,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 97,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 107,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 107,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 122,
      "end": 128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 122,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 122,
          "end": 123,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 126,
          "end": 127,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
