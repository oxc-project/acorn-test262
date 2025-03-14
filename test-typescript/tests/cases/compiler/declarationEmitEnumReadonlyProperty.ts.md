declarationEmitEnumReadonlyProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 35,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "'a'",
              "value": "a"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 30,
              "end": 33,
              "raw": "'b'",
              "value": "b"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 71,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 64,
              "decorators": [],
              "name": "type",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 67,
              "end": 70,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 79,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 79,
            "end": 85,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 80,
              "end": 85,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 82,
                "end": 85,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 82,
                  "end": 85,
                  "left": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 88,
            "end": 100,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 88,
              "end": 95,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 96,
              "end": 100,
              "decorators": [],
              "name": "type",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
