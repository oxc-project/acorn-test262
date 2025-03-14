collisionCodeGenModuleWithMemberClassConflict.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 41,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 39,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 23,
              "end": 39,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 32,
                "end": 39,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 31,
                "decorators": [],
                "name": "m1",
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
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 52,
            "end": 63,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 56,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 56,
                "end": 58,
                "decorators": [],
                "name": "m1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 59,
                "end": 61,
                "decorators": [],
                "name": "m1",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 66,
      "end": 137,
      "body": {
        "type": "TSModuleBlock",
        "start": 76,
        "end": 137,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 82,
            "end": 105,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 89,
              "end": 105,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 98,
                "end": 105,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 97,
                "decorators": [],
                "name": "m2",
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
            "type": "ExportNamedDeclaration",
            "start": 111,
            "end": 135,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 118,
              "end": 135,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 128,
                "end": 135,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 124,
                "end": 127,
                "decorators": [],
                "name": "_m2",
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
        "start": 73,
        "end": 75,
        "decorators": [],
        "name": "m2",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 145,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 148,
            "end": 159,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 152,
              "end": 157,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "m2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 157,
                "decorators": [],
                "name": "m2",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 168,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 171,
            "end": 183,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 175,
              "end": 181,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 175,
                "end": 177,
                "decorators": [],
                "name": "m2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 178,
                "end": 181,
                "decorators": [],
                "name": "_m2",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
