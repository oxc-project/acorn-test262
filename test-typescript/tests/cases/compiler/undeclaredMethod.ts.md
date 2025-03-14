undeclaredMethod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 62,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 62,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 62,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 56,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 51,
                      "decorators": [],
                      "name": "salt",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 51,
                      "end": 56,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 54,
                        "end": 56,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": []
                    }
                  }
                ]
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
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 66,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 75,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 75,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 72,
                  "end": 75,
                  "left": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "M",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 74,
                    "end": 75,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 78,
            "end": 87,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 82,
              "end": 85,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "C",
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
      "type": "ExpressionStatement",
      "start": 90,
      "end": 99,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 98,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 90,
          "end": 96,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 92,
            "end": 96,
            "decorators": [],
            "name": "salt",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 119,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 108,
          "end": 117,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 110,
            "end": 117,
            "decorators": [],
            "name": "saltbar",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
