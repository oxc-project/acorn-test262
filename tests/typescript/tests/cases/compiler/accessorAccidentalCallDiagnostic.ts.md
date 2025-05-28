__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 116,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 71,
        "decorators": [],
        "name": "Test24554",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 72,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 78,
            "end": 114,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 90,
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 90,
              "end": 114,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              },
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
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 117,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 135,
        "decorators": [],
        "name": "test24554",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 173,
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
