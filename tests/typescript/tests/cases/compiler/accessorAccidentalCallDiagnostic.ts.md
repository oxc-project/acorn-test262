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
        "name": "Test24554",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 71
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 90
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 94,
                  "end": 100
                },
                "start": 92,
                "end": 100
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 110,
                      "end": 111
                    },
                    "start": 103,
                    "end": 112
                  }
                ],
                "start": 101,
                "end": 114
              },
              "expression": false,
              "start": 90,
              "end": 114
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 78,
            "end": 114
          }
        ],
        "start": 72,
        "end": 116
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 116
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test24554",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 135
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Test24554",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 148
              },
              "typeArguments": null,
              "start": 139,
              "end": 148
            },
            "start": 137,
            "end": 148
          },
          "start": 136,
          "end": 148
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "property",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 173
                },
                "optional": false,
                "computed": false,
                "start": 163,
                "end": 173
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 163,
              "end": 175
            },
            "start": 156,
            "end": 176
          }
        ],
        "start": 150,
        "end": 178
      },
      "expression": false,
      "start": 117,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 178
}
```
