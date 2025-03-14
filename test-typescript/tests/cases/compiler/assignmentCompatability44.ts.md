assignmentCompatability44.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 43,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 43,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 41,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 41,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 39,
                "end": 41,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 28,
                  "end": 37,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 31,
                      "end": 37
                    }
                  }
                }
              ]
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 45,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 70,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 56,
                "end": 70,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 58,
                    "end": 68,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 63,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 65,
                        "end": 68,
                        "typeName": {
                          "type": "Identifier",
                          "start": 65,
                          "end": 68,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
