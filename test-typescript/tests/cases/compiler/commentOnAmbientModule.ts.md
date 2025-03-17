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
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 114,
        "end": 137,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 120,
            "end": 135,
            "id": {
              "type": "Identifier",
              "start": 129,
              "end": 132,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 167,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 184,
        "end": 205,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 190,
            "end": 203,
            "id": {
              "type": "Identifier",
              "start": 196,
              "end": 199,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 200,
              "end": 203,
              "body": []
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
      "declare": true,
      "global": false
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
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 102,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 63,
              "name": "foobar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "MemberExpression",
              "start": 72,
              "end": 77,
              "object": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 74,
                "end": 77,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 78,
              "end": 100,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 88,
                  "end": 94,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 91,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 91,
                    "end": 94,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": null,
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
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
