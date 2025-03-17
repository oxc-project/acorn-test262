__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 90,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 32,
              "end": 35,
              "body": []
            },
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 41,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 49,
              "end": 88,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 59,
                  "end": 82,
                  "static": false,
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "start": 60,
                    "end": 75,
                    "object": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 66,
                      "name": "Symbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 75,
                      "name": "iterator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 76,
                    "end": 82,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 79,
                      "end": 82,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
