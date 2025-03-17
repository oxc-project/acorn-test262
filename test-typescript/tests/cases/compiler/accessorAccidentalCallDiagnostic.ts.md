__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "name": "Test24554",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 114,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "name": "property",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 114,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "type": "FunctionDeclaration",
      "start": 117,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 135,
        "name": "test24554",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 136,
          "end": 148,
          "name": "x",
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
                "name": "Test24554",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 163,
                "end": 173,
                "object": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 173,
                  "name": "property",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
