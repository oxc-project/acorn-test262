__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 29,
                    "end": 35
                  },
                  "init": null,
                  "definite": false,
                  "start": 29,
                  "end": 35
                }
              ],
              "declare": false,
              "start": 25,
              "end": 36
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 36
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 67
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 76
                    },
                    "optional": false,
                    "computed": false,
                    "start": 61,
                    "end": 76
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 80,
                      "end": 83
                    },
                    "expression": false,
                    "start": 77,
                    "end": 83
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 60,
                  "end": 83
                }
              ],
              "start": 50,
              "end": 89
            },
            "abstract": false,
            "declare": false,
            "start": 42,
            "end": 89
          }
        ],
        "start": 12,
        "end": 91
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 91
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
