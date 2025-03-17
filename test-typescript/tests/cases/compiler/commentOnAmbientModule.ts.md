__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 97,
  "end": 206,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 97,
      "end": 137,
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 137,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 120,
            "end": 135,
            "async": false,
            "body": null,
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 167,
      "end": 205,
      "body": {
        "type": "TSModuleBlock",
        "start": 184,
        "end": 205,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 190,
            "end": 203,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 200,
              "end": 203,
              "body": []
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 102,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 28,
      "end": 102,
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 102,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 100,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 100,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 88,
                  "end": 94,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 91,
                    "end": 94,
                    "async": false,
                    "body": null,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "decorators": [],
              "name": "foobar",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": {
              "type": "MemberExpression",
              "start": 72,
              "end": 77,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "superTypeArguments": null,
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
