__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 38,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 36,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 27,
              "name": "doThing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 35,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 31,
                "end": 35
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 92,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 92,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 47,
            "name": "cls",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 50,
            "end": 92,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 71,
              "end": 92,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 77,
                  "end": 90,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 84,
                    "name": "doThing",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 84,
                    "end": 90,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 87,
                      "end": 90,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
            "implements": [
              {
                "type": "TSClassImplements",
                "start": 67,
                "end": 70,
                "expression": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
