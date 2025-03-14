accessorAccidentalCallDiagnostic.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 179,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 114,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "decorators": [],
              "name": "property",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 114,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 101,
                "end": 114,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 103,
                    "end": 112,
                    "argument": {
                      "type": "Literal",
                      "start": 110,
                      "end": 111,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 92,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 94,
                  "end": 100
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "Test24554",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 117,
      "end": 178,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 150,
        "end": 178,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 156,
            "end": 176,
            "argument": {
              "type": "CallExpression",
              "start": 163,
              "end": 175,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 163,
                "end": 173,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 173,
                  "decorators": [],
                  "name": "property",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 135,
        "decorators": [],
        "name": "test24554",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 136,
          "end": 148,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 148,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 148,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 148,
                "decorators": [],
                "name": "Test24554",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
