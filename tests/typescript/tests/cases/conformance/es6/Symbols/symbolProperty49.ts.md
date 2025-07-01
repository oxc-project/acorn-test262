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
        "start": 7,
        "end": 8
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
                    "start": 26,
                    "end": 32
                  },
                  "init": null,
                  "definite": false,
                  "start": 26,
                  "end": 32
                }
              ],
              "declare": false,
              "start": 22,
              "end": 33
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 33
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
              "start": 45,
              "end": 46
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
                      "start": 58,
                      "end": 64
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 73
                    },
                    "optional": false,
                    "computed": false,
                    "start": 58,
                    "end": 73
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
                      "start": 77,
                      "end": 80
                    },
                    "expression": false,
                    "start": 74,
                    "end": 80
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 57,
                  "end": 80
                }
              ],
              "start": 47,
              "end": 86
            },
            "abstract": false,
            "declare": false,
            "start": 39,
            "end": 86
          }
        ],
        "start": 9,
        "end": 88
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 88
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
